const Loading = ({ text, icon = "1", color = "#4287f5", width = "100px" }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full flex flex-col justify-center items-center bg-[black] bg-opacity-50 z-[9999]">
      <div
        className="flex flex-col justify-center items-center"
        style={{ width: `${width}`, height: `${width}` }}
      >
        {icon === "1" && (
          <svg
            version="1.1"
            id="L1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <circle
              fill="none"
              stroke={color}
              strokeWidth="6"
              strokeMiterlimit="15"
              strokeDasharray="14.2472,14.2472"
              cx="50"
              cy="50"
              r="47"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              fill="none"
              stroke={color}
              strokeWidth="1"
              strokeMiterlimit="10"
              strokeDasharray="10,10"
              cx="50"
              cy="50"
              r="39"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite"
              />
            </circle>
            <g fill={color}>
              <rect x="30" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.1"
                />
              </rect>
              <rect x="40" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.2"
                />
              </rect>
              <rect x="50" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.3"
                />
              </rect>
              <rect x="60" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.4"
                />
              </rect>
              <rect x="70" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.5"
                />
              </rect>
            </g>
          </svg>
        )}
        {icon === "2" && (
          <svg
            version="1.1"
            id="L2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <circle
              fill="none"
              stroke={color}
              strokeWidth="4"
              strokeMiterlimit="10"
              cx="50"
              cy="50"
              r="48"
            />
            <line
              fill="none"
              stroke-linecap="round"
              stroke={color}
              strokeWidth="4"
              strokeMiterlimit="10"
              x1="50"
              y1="50"
              x2="85"
              y2="50.5"
            >
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </line>
            <line
              fill="none"
              stroke-linecap="round"
              stroke={color}
              strokeWidth="4"
              strokeMiterlimit="10"
              x1="50"
              y1="50"
              x2="49.5"
              y2="74"
            >
              <animateTransform
                attributeName="transform"
                dur="15s"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </line>
          </svg>
        )}
        {icon === "3" && (
          <svg
            version="1.1"
            id="L3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <circle
              fill="none"
              stroke={color}
              strokeWidth="4"
              cx="50"
              cy="50"
              r="44"
              style={{ opacity: 0.5 }}
            />
            <circle
              fill={color}
              stroke="#e74c3c"
              strokeWidth="3"
              cx="8"
              cy="54"
              r="6"
            >
              <animateTransform
                attributeName="transform"
                dur="2s"
                type="rotate"
                from="0 50 48"
                to="360 50 52"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        )}
        {icon === "4" && (
          <svg
            version="1.1"
            id="L4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            style={{ margin: "auto" }}
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <circle fill={color} stroke="none" cx="6" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill={color} stroke="none" cx="26" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill={color} stroke="none" cx="46" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
            <circle fill={color} stroke="none" cx="66" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.4"
              />
            </circle>
            <circle fill={color} stroke="none" cx="86" cy="50" r="6">
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.5"
              />
            </circle>
          </svg>
        )}
        {icon === "5" && (
          <svg
            version="1.1"
            id="L5"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <circle fill={color} stroke="none" cx="6" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15 ; 0 -15; 0 15"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill={color} stroke="none" cx="26" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -15; 0 10"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill={color} stroke="none" cx="47" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -15; 0 5"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
            <circle fill={color} stroke="none" cx="72" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -15; 0 10"
                repeatCount="indefinite"
                begin="0.4"
              />
            </circle>
            <circle fill={color} stroke="none" cx="94" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -15; 0 5"
                repeatCount="indefinite"
                begin="0.5"
              />
            </circle>
          </svg>
        )}
        {icon === "6" && (
          <svg
            version="1.1"
            id="L6"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <rect
              fill="none"
              stroke={color}
              strokeWidth="4"
              x="25"
              y="25"
              width="50"
              height="50"
            >
              <animateTransform
                attributeName="transform"
                dur="0.5s"
                from="0 50 50"
                to="180 50 50"
                type="rotate"
                id="strokeBox"
                attributeType="XML"
                begin="rectBox.end"
              />
            </rect>
            <rect x="27" y="27" fill={color} width="46" height="50">
              <animate
                attributeName="height"
                dur="1.3s"
                attributeType="XML"
                from="50"
                to="0"
                id="rectBox"
                fill="freeze"
                begin="0s;strokeBox.end"
              />
            </rect>
          </svg>
        )}
        {icon === "7" && (
          <svg
            version="1.1"
            id="L7"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <path
              fill={color}
              d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
          c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill={color}
              d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
          c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill={color}
              d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
          L82,35.7z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="2s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        )}
        {icon === "8" && (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <rect
              fill={color}
              width="3"
              height="100"
              transform="translate(0) rotate(180 3 50)"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                dur="1s"
                values="30; 100; 30"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="17"
              fill={color}
              width="3"
              height="100"
              transform="translate(0) rotate(180 20 50)"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                dur="1s"
                values="30; 100; 30"
                repeatCount="indefinite"
                begin="0.1s"
              />
            </rect>
            <rect
              x="40"
              fill={color}
              width="3"
              height="100"
              transform="translate(0) rotate(180 40 50)"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                dur="1s"
                values="30; 100; 30"
                repeatCount="indefinite"
                begin="0.3s"
              />
            </rect>
            <rect
              x="60"
              fill={color}
              width="3"
              height="100"
              transform="translate(0) rotate(180 58 50)"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                dur="1s"
                values="30; 100; 30"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </rect>
            <rect
              x="80"
              fill={color}
              width="3"
              height="100"
              transform="translate(0) rotate(180 76 50)"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                dur="1s"
                values="30; 100; 30"
                repeatCount="indefinite"
                begin="0.1s"
              />
            </rect>
            <rect
              x="100"
              fill={color}
              width="3"
              height="100"
              transform="translate(0) rotate(180 94 50)"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                dur="1s"
                values="30; 100; 30"
                repeatCount="indefinite"
                begin="0.1s"
              />
            </rect>
          </svg>
        )}
        {icon === "9" && (
          <svg
            version="1.1"
            id="L9"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <path
              fill={color}
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        )}
      </div>
      <p className={`font-bold uppercase mt-2`} style={{ color: `${color}` }}>
        {text}
      </p>
    </div>
  );
};

export default Loading;