import {FC, CSSProperties} from 'react'

type Symbol = {
  text: string;
  style: CSSProperties;
}

type AnimatedLetterType = {
  symbol: Symbol;
  index: number;
}

interface Props {
  text: string;
}

const AnimatedLetter: FC<AnimatedLetterType> = ({symbol, index}) => {
  return(
    <span key={`symbol-${index}`} style={symbol.style} dangerouslySetInnerHTML={{__html: symbol.text}} className="animated-word__letter"></span> 
  );
}

const AnimatedWord: FC<Props> = ({ text }) => {
  const array: Symbol[] = [];

  Array.from(text).forEach((el, index) => {
    if(el === "_")
      el = "&nbsp;"

    array.push({
      text: el,
      style: {
        transitionDelay: `${0.020 * index}s`
      }
    })
  })

  return (
    <div className="animated-word">
      <div className="animated-word__wrapper">
        <div className="animated-word__part">
          {array.map((symbol, index) => 
            <AnimatedLetter symbol={symbol} index={index} key={`top-${symbol.style.transitionDelay}`} />   
          )}
        </div>
        <div className="animated-word__part animated-word__part--bottom">
          {array.map((symbol, index) => 
            <AnimatedLetter symbol={symbol} index={index} key={`bottom-${symbol.style.transitionDelay}`} />   
          )}
        </div>
        </div>
    </div>
  )
}

export default AnimatedWord;