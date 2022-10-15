/* eslint-disable react/no-children-prop */
import { useEffect, useState, useCallback } from 'react'

import { useParams } from 'react-router-dom'

import { TitleText } from '../../components/Typograph'
import { TestContainer, TestHeader, TestBody } from './style'
import ReactMarkdown from 'react-markdown'
import { api } from '../../services/api'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

export function PracticalTest() {
  const { id } = useParams()
  const token = localStorage.getItem('@Auth:token')
  const [testData, setTestData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getTestDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const { data } = await api.get(`/practicalTest/content/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      setTestData(data.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getTestDetails()
  }, [getTestDetails])

  console.log(isLoading)

  return (
    <>
      <TestContainer>
        <TestHeader>
          <TitleText>{testData.title}</TitleText>
        </TestHeader>

        <TestBody>
          <div className="container">
            <ReactMarkdown
              children={testData.body}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          </div>
        </TestBody>
      </TestContainer>
    </>
  )
}
