// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-container">
      <div className="faqs-inner-container">
        <h1 className="faqs-heading">FAQs</h1>
        <ul>
          {faqsList.map(eachList => (
            <FaqItem eachList={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
