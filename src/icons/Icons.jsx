export const UploadIcon = ({ className = '' }) => {
  return (
    <svg 
      xmlns = 'http://www.w3.org/2000/svg' 
      viewBox = '0 0 24 24' 
      fill = 'none' 
      stroke = 'currentColor' 
      strokeWidth = 'current' 
      strokeLinecap = 'round' 
      strokeLinejoin = 'round' 
      className = {`icon icon-tabler icons-tabler-outline icon-tabler-upload ${className}`}>
        <path 
          stroke = 'none' 
          d = 'M0 0h24v24H0z' 
          fill = 'none' />
        <path d = 'M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
        <path d = 'M7 9l5 -5l5 5' />
        <path d = 'M12 4l0 12' />
    </svg>
  )
}

export const FileIcon = ({ className = '' }) => {
  return (
    <svg 
      xmlns = 'http://www.w3.org/2000/svg' 
      viewBox = '0 0 24 24' 
      fill = 'none' 
      stroke = 'currentColor' 
      strokeWidth = 'current' 
      strokeLinecap = 'round' 
      strokeLinejoin = 'round' 
      className = {`icon icon-tabler icons-tabler-outline icon-tabler-file-import ${className}`}>
        <path 
          stroke = 'none' 
          d = 'M0 0h24v24H0z' 
          fill = 'none'/>
        <path d = 'M14 3v4a1 1 0 0 0 1 1h4' />
        <path d = 'M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3' />
    </svg>
  )
}

export const GithubIcon = ({ className = '' }) => {
  return (
    <svg 
      xmlns = 'http://www.w3.org/2000/svg' 
      viewBox = '0 0 24 24' 
      fill = 'none' 
      stroke = 'currentColor' 
      strokeWidth = 'current' 
      strokeLinecap = 'round' 
      strokeLinejoin = 'round' 
      className = {`icon icon-tabler icons-tabler-outline icon-tabler-brand-github ${className}`}>
        <path 
          stroke = 'none' 
          d = 'M0 0h24v24H0z' 
          fill = 'none'/>
        <path d = 'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
    </svg>
  )
}

export const ChevronIcon = ({ className = '' }) => {
  return (
    <svg 
      xmlns = 'http://www.w3.org/2000/svg' 
      viewBox = '0 0 24 24' 
      fill = 'none' 
      stroke = 'currentColor' 
      strokeWidth = 'current' 
      strokeLinecap = 'round' 
      strokeLinejoin = 'round' 
      className = {`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${className}`}>
        <path 
          stroke = 'none' 
          d = 'M0 0h24v24H0z' 
          fill = 'none'/>
        <path d = 'M6 9l6 6l6 -6' />
    </svg>
  )
}

export const BotIcon = (props) => (
  <svg
    xmlns = 'http://www.w3.org/2000/svg'
    viewBox = '0 0 62 56'
    {...props}
  >
    <path
      d = 'M60.281 36.348c-2.905 0-5.293 2.388-5.293 5.293V69.51c0 2.905 2.388 5.293 5.293 5.293h50.026c2.904 0 5.293-2.388 5.293-5.293V41.64c0-2.904-2.389-5.292-5.293-5.292zm0 3.175h50.026c1.2 0 2.117.917 2.117 2.118V69.51c0 1.2-.917 2.117-2.117 2.117H60.28c-1.2 0-2.119-.916-2.119-2.117V41.64c0-1.2.918-2.117 2.12-2.117z'
      style = {{
        color: 'currentColor',
        fill: 'currentcolor',
        fillOpacity: 1,
        stroke: 'currentColor',
        strokeWidth: 'current',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeDasharray: 'none',
        strokeOpacity: 1,
      }}
      transform = 'translate(-54.46 -25.574)'
    />
    <path
      d = 'M75.282 73.932 60.889 80.8v-6.868z'
      style = {{
        display: 'inline',
        fill: 'currentColor',
        fillOpacity: 1,
        stroke: 'currentColor',
        strokeWidth: 'current',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeDasharray: 'none',
        strokeOpacity: 1,
      }}
      transform = 'translate(-54.46 -25.574)'
    />
    <path
      d = 'M100.046 55.575a3.89 5.37 0 0 1-3.89 5.37 3.89 5.37 0 0 1-3.888-5.37 3.89 5.37 0 0 1 3.889-5.37 3.89 5.37 0 0 1 3.889 5.37zm-21.726 0a3.89 5.37 0 0 1-3.889 5.37 3.89 5.37 0 0 1-3.89-5.37 3.89 5.37 0 0 1 3.89-5.37 3.89 5.37 0 0 1 3.89 5.37'
      style = {{
        fill: 'currentColor',
        fillOpacity: 1,
        stroke: 'currentColor',
        strokeWidth: 'current',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeDasharray: 'none',
      }}
      transform = 'translate(-54.46 -25.574)'
    />
    <path
      d = 'M84.078 32.152a3.147 3.147 0 0 1-1.93-2.902 3.147 3.147 0 0 1 3.146-3.147 3.147 3.147 0 0 1 3.146 3.147v0a3.147 3.147 0 0 1-1.93 2.902m-.002-.005v5.767c0 .109-.088.197-.197.197h-2.034a.196.196 0 0 1-.197-.197v-5.767'
      style = {{
        display: 'inline',
        fill: 'currentColor',
        fillOpacity: 1,
        stroke: 'currentColor',
        strokeWidth: 'current',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeDasharray: 'none',
        strokeOpacity: 1,
      }}
      transform = 'translate(-54.46 -25.574)'
    />
  </svg>
)

export const SendIcon = ({ className = '' }) => {
  return (
    <svg 
      xmlns = 'http://www.w3.org/2000/svg' 
      viewBox = '0 0 24 24' 
      fill = 'none' 
      stroke = 'currentColor' 
      strokeWidth = 'current'
      strokeLinecap = 'round' 
      strokeLinejoin = 'round' 
      className = {`icon icon-tabler icons-tabler-outline icon-tabler-send-2 ${className}`}>
        <path 
          stroke = 'none' 
          d = 'M0 0h24v24H0z' 
          fill = 'none'/>
        <path d = 'M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z' />
        <path d = 'M6.5 12h14.5' />
    </svg>
  )
}

export const DataEmptyImage = (props) => (
  <svg
    xmlns = 'http://www.w3.org/2000/svg'
    viewBox = '0 0 85 87'
    {...props}
  >
    <g transform = 'translate(-33.073 -88.106)'>
      <path
        d = 'M99.602 91.254a2.613 2.613 0 0 0-2.619-2.619H36.221v0a2.613 2.613 0 0 0-2.619 2.62v80.666a2.613 2.613 0 0 0 2.62 2.62h60.761a2.613 2.613 0 0 0 2.62-2.62z'
        style = {{
          display: 'inline',
          fill: 'none',
          stroke: '#848484',
          strokeWidth: 'current',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {36.405}
        height = {3.143}
        x = {38.185}
        y = {92.635}
        ry = {1.571}
        style = {{
          display: 'inline',
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {56.714}
        height = {3.024}
        x = {38.245}
        y = {123.753}
        ry = {1.512}
        style = {{
          display: 'inline',
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {56.714}
        height = {3.024}
        x = {38.162}
        y = {131.425}
        ry = {1.512}
        style = {{
          display: 'inline',
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {56.714}
        height = {3.024}
        x = {38.241}
        y = {139.097}
        ry = {1.512}
        style = {{
          display: 'inline',
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {56.833}
        height = {18.857}
        x = {38.185}
        y = {100.307}
        ry = {1.571}
        style = {{
          display: 'inline',
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <path
        d = 'M104.724 136.49a10.715 10.715 0 0 1-3.162 14.82 10.715 10.715 0 0 1-14.82-3.162 10.715 10.715 0 0 1 3.162-14.82 10.715 10.715 0 0 1 14.82 3.162zm-16.628-5.951a14.04 14.04 0 0 0-4.143 19.417 14.04 14.04 0 0 0 18.23 4.832h.002l1.04 1.604-.455.295a.634.634 0 0 0-.188.879l10.808 16.67c.191.295.584.378.879.187l3.21-2.08a.634.634 0 0 0 .187-.88l-10.808-16.67a.634.634 0 0 0-.88-.187l-.454.295-1.04-1.604.003-.002a14.04 14.04 0 0 0 3.027-18.614 14.04 14.04 0 0 0-19.418-4.142z'
        style = {{
          display: 'inline',
          fill: '#848484',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeOpacity: 1,
        }}
      />
    </g>
  </svg>
)

export const TableEmptyImage = (props) => (
  <svg
    xmlns = 'http://www.w3.org/2000/svg'
    viewBox = '0 0 123 87'
    {...props}
  >
    <g transform = 'translate(-48.683 -48.419)'>
      <rect
        width = {104.464}
        height = {85.598}
        x = {49.213}
        y = {48.948}
        ry = {1.372}
        style = {{
          display: 'inline',
          fill: 'none',
          fillOpacity: 1,
          stroke: '#848484',
          strokeWidth: 'current',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {94.461}
        height = {14.991}
        x = {54.389}
        y = {54.144}
        ry = {0.634}
        style = {{
          fill: '#848484',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {14.524}
        height = {54.686}
        x = {54.358}
        y = {74.556}
        ry = {0.635}
        style = {{
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {14.524}
        height = {54.686}
        x = {74.358}
        y = {74.556}
        ry = {0.635}
        style = {{
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {14.524}
        height = {54.686}
        x = {94.358}
        y = {74.556}
        ry = {0.635}
        style = {{
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {14.524}
        height = {54.686}
        x = {114.358}
        y = {74.556}
        ry = {0.635}
        style = {{
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <rect
        width = {14.524}
        height = {54.686}
        x = {134.358}
        y = {74.556}
        ry = {0.635}
        style = {{
          fill: '#b4b4b4',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <path
        d = 'M158.933 96.5a10.715 10.715 0 0 1-3.161 14.819 10.715 10.715 0 0 1-14.82-3.162 10.715 10.715 0 0 1 3.162-14.82 10.715 10.715 0 0 1 14.82 3.162zm-16.628-5.952a14.04 14.04 0 0 0-4.142 19.417 14.04 14.04 0 0 0 18.229 4.833l.002-.001 1.04 1.604-.455.295a.634.634 0 0 0-.187.88l10.807 16.669c.192.295.584.379.88.187l3.208-2.08a.634.634 0 0 0 .188-.88l-10.808-16.669a.634.634 0 0 0-.879-.187l-.455.294-1.04-1.604.003-.002a14.04 14.04 0 0 0 3.027-18.614 14.04 14.04 0 0 0-19.418-4.142z'
        style = {{
          display: 'inline',
          fill: '#848484',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeOpacity: 1,
        }}
      />
    </g>
  </svg>
)

export const ChartEmptyImage = (props) => (
  <svg
    xmlns = 'http://www.w3.org/2000/svg'
    viewBox = '0 0 110 79'
    {...props}
  >
    <g transform = 'translate(-43.392 -80.762)'>
      <rect
        width = {99.471}
        height = {4.471}
        x = {43.392}
        y = {155.698}
        ry = {1.744}
        style = {{
          fill: '#848484',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      />
      <g transform = 'translate(.627 -129.567)'>
        <rect
          width = {14.646}
          height = {19.646}
          x = {55.177}
          y = {260.177}
          ry = {0.819}
          style = {{
            fill: '#b4b4b4',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 'current', 
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <rect
          width = {14.532}
          height = {34.533}
          x = {75.234}
          y = {245.234}
          ry = {1.439}
          style = {{
            fill: '#b4b4b4',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 'current', 
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <rect
          width = {14.442}
          height = {49.443}
          x = {95.279}
          y = {230.279}
          ry = {2.06}
          style = {{
            fill: '#b4b4b4',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 'current', 
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
        <rect
          width = {14.342}
          height = {69.342}
          x = {115.329}
          y = {210.329}
          ry = {2.89}
          style = {{
            fill: '#b4b4b4',
            fillOpacity: 1,
            stroke: 'none',
            strokeWidth: 'current', 
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeDasharray: 'none',
            strokeOpacity: 1,
          }}
        />
      </g>
      <path
        d = 'M140.389 122.118a10.715 10.715 0 0 1-3.162 14.82 10.715 10.715 0 0 1-14.82-3.162 10.715 10.715 0 0 1 3.162-14.82 10.715 10.715 0 0 1 14.82 3.162zm-16.628-5.95a14.04 14.04 0 0 0-4.143 19.416 14.04 14.04 0 0 0 18.23 4.833l.001-.001 1.04 1.604-.454.295a.634.634 0 0 0-.188.88l10.808 16.669c.191.295.583.379.879.187l3.209-2.08a.634.634 0 0 0 .188-.88l-10.808-16.669a.634.634 0 0 0-.88-.188l-.454.295-1.04-1.604.003-.002a14.04 14.04 0 0 0 3.027-18.614 14.04 14.04 0 0 0-19.418-4.142z'
        style = {{
          display: 'inline',
          fill: '#848484',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 'current', 
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeOpacity: 1,
        }}
      />
    </g>
  </svg>
)