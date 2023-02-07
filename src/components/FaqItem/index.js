// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqsItem extends Component {
  state = {isImagePlus: false}

  isButtonClick = () => {
    this.setState(prevState => ({isImagePlus: !prevState.isImagePlus}))
  }

  render() {
    const {eachList} = this.props
    const {questionText, answerText} = eachList
    const {isImagePlus} = this.state
    const imagePlusOrMinus = isImagePlus
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imageAlt = isImagePlus ? 'minus' : 'plus'

    return (
      <li className="faqs-item-container">
        <div className="heading-plus-container">
          <h1 className="item-heading">{questionText}</h1>
          <button type="button" className="button" onClick={this.isButtonClick}>
            <img src={imagePlusOrMinus} alt={imageAlt} />
          </button>
        </div>
        {isImagePlus ? <hr className="hr" /> : ''}
        {isImagePlus ? <p className="para">{answerText}</p> : ''}
      </li>
    )
  }
}

export default FaqsItem
