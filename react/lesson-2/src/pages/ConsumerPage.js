import React from 'react'
import { ThemeConsumer } from '../ThemeContext'

function ConsumerPage() {
  return (
    <div className='border'>
      <ThemeConsumer>
        {ctx => <div className={ctx.themeColor}>Consumer文本</div>}
      </ThemeConsumer>
    </div>
  )
}

export default ConsumerPage
