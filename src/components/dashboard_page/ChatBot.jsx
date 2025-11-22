import { useContext, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import Markdown from 'react-markdown'
import FileMetadataContext from '@/context/FileMetadataContext'
import PageFiltersContext from '@/context/PageFiltersContext'
import { BotIcon, SendIcon } from '@/icons/Icons'
import { loadData, ollamaChat } from '@/services/chatbot.js'
import './styles/ChatBot.css'

const initMessages = [
  {
    role: 'assistant', 
    content: '¡Hola! Soy tu asistente de análisis de datos de EDA Laboratory.'
  }, 
  {
    role: 'assistant', 
    content: 'Estoy aquí para ayudarte a interpretar tus gráficos, tablas y resultados.'
  }
]

const pageNames = {
  'general-information': 'Información General', 
  'distribution': 'Distribución', 
  'correlations': 'Correlaciónes', 
  'feature-selection': 'Selección de características'
}

const ChatBot = () => {
  const { fileMetadata } = useContext(FileMetadataContext)
  const { filters } = useContext(PageFiltersContext)

  const { pathname } = useLocation()
  const messagesRef = useRef(null)

  const [chatVisible, setChatVisible] = useState(false)
  const [messages, setMessages] = useState(initMessages)
  const [messageInput, setMessageInput] = useState('')
  const [pending, setPending] = useState(false)

  const [data, setData] = useState(null)

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [messages])

  useEffect(() => {
    const urlParts = pathname.split('/')
    const page = urlParts[urlParts.length - 1]
    const message = [
      {
        role: 'assistant', 
        content: `Estás en la sección "${pageNames[page]}", así que puedes preguntarme lo que quieras sobre los datos que ves aquí.`
      }, 
      {
        role: 'assistant', 
        content: 'Si deseas consultar otra sección, solo cambia desde el menú de navegación.'
      }
    ]
    setMessages([...initMessages, ...message])

    const getData = async () => {
      const dataRes = await loadData(
        page, 
        {
          delimiter: fileMetadata.delimiter, 
          decimal: fileMetadata.decimal
        },
        filters[page]
      )

      setData(dataRes)
    }

    getData()
  }, [pathname, fileMetadata, filters])

  const handleChatButton = () => {
    setChatVisible(!chatVisible)
  }

  const handleInputChange = (event) => {
    setMessageInput(event.target.value)
  }

  const handleAddMessage = async () => {
    let text = messageInput.trim()
    const messagesCopy = [...messages]
    if (text !== '') {
      const message = {
        role: 'user', 
        content: messageInput
      }
      messagesCopy.push(message)
      setMessages([...messagesCopy])
      setMessageInput('')

      setPending(true)
      const replay = await ollamaChat(data, messagesCopy)
      if (replay.status === 200) {
        if (replay.data?.state === 'Success') {
          messagesCopy.push(replay.data.data)
          setMessages([...messagesCopy])
        }
      }
      setPending(false)
    }
  }

  return (
    <div className = 'chatbot-container'>
      <article 
        className = 'chatbot-chat'
        style = {{ display: chatVisible ? 'flex' : 'none' }}>
          <div className = 'chatbot-header'>
            <BotIcon className = 'chatbot-header-icon' />
            <span className = 'text-strong'>
              Asistente de EDA Laboratory
            </span>
          </div>

          <div ref = {messagesRef} className = 'chatbot-messages'>
            { messages.map((message, idx) => (
              <span 
                key = {`message-${idx}`} 
                className = {message.role === 'user' ? 'chatbot-message chatbot-message-user' : 'chatbot-message'}>
                  <Markdown>
                    {message.content}
                  </Markdown>
              </span>
            )) }
            { pending && <span><em>Generando...</em></span>}
          </div>

          <div className = 'chatbot-input'>
            <input 
              type = 'text'
              placeholder = 'Escribe tu pregunta' 
              onKeyDown = {(event) => {
                if (event.key === 'Enter') handleAddMessage()
              }}
              value = {messageInput} 
              onChange = {handleInputChange} />
            <button 
              onClick = {handleAddMessage}
              disabled = {pending}>
                <SendIcon className = 'chatbot-input-icon' />
            </button>
          </div>
      </article>
      <button 
        className = 'chatbot-button'
        onClick = {handleChatButton}>
          <BotIcon className = 'chatbot-icon' />
      </button>
    </div>
  )
}

export default ChatBot