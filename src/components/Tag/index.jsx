import styled from "styled-components"
import PropTypes from "prop-types"
import './tag.css'


const TagContainer = styled.div`
  background-color: ${props => props.color};
  `

const Tag = ({ text, color, classNameTag }) => {
  return (
    <TagContainer color={color} className={classNameTag}>
      {text}
    </TagContainer>
  )
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  classNameTag: PropTypes.string
}

export default Tag
