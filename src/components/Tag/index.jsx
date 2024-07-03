import styled from "styled-components"
import './tag.css'


const TagContainer = styled.div`
  background-color: ${props => props.color};
  `

const Tag = ({text, color, classNameTag}) => {
  return (
    <TagContainer color={color} className={classNameTag}>
      {text}
    </TagContainer>
  )
}

export default Tag
