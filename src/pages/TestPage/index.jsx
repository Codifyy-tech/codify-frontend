import { useState, useEffect } from 'react'

import { CheckBox } from '../../components/CheckBox'
import { RegularText, TitleText } from '../../components/Typograph'
import { api } from '../../services/api'
import { CardTest } from './components/CardTest'
import {
  ButtonArea,
  CheckBoxContainer,
  FilterArea,
  TestArea,
  TestContainer,
} from './styles'

export function TestPage() {
  const token = localStorage.getItem('@Auth:token')
  const [tests, setTests] = useState([])
  const [companies, setCompanies] = useState([])
  const [technologies, setTechnologies] = useState([])
  const [selectedTechsId, setSelectedTechsId] = useState([])
  const [selectedCompaniesId, setsSelectedCompaniesId] = useState([])

  useEffect(() => {
    const getPracticalTests = async () => {
      const { data } = await api.get('/list/practicalTest', {
        headers: { Authorization: 'Bearer ' + token },
      })

      setTests(data.data)
    }

    const getCompanies = async () => {
      const { data } = await api.get('/list/company', {
        headers: { Authorization: 'Bearer ' + token },
      })

      setCompanies(data.data)
    }

    const getTechnologies = async () => {
      const { data } = await api.get('/list/technology', {
        headers: { Authorization: 'Bearer ' + token },
      })

      setTechnologies(data.data)
    }

    getPracticalTests()
    getCompanies()
    getTechnologies()
  }, [token])

  async function handleFilter(e) {
    e.preventDefault()

    const { data } = await api.get('/list/practicalTest', {
      params: {
        technology_id: selectedTechsId,
        company_id: selectedCompaniesId,
      },
      headers: { Authorization: 'Bearer ' + token },
    })

    setTests(data.data)
  }

  async function handleCheck(id, type) {
    if (type === 'company') {
      setsSelectedCompaniesId((oldValue) =>
        oldValue.includes(id)
          ? oldValue.filter((itemId) => id !== itemId)
          : [...oldValue, id],
      )
    } else {
      setSelectedTechsId((oldValue) =>
        oldValue.includes(id)
          ? oldValue.filter((itemId) => id !== itemId)
          : [...oldValue, id],
      )
    }
  }

  async function handleDefaultChecked(e) {
    setSelectedTechsId()
  }

  return (
    <TestContainer>
      <TestArea>
        {tests.map((test, index) => {
          return (
            <CardTest
              key={index}
              id={tests[index]._id}
              title={test.company.name}
              description={test.description}
              image={test.company.photo}
              tag={test.technology.name}
              level={test.level}
            />
          )
        })}
      </TestArea>

      <FilterArea>
        <form>
          <TitleText>
            Filtros<span>.</span>
          </TitleText>
          <TitleText fontSize="title-s">
            Tecnologias<span>.</span>
          </TitleText>
          <div>
            <CheckBoxContainer>
              {technologies.map((tech, index) => {
                return (
                  <CheckBox
                    key={index}
                    id={tech._id}
                    value={tech.name}
                    type="technology"
                    handleCheck={handleCheck}
                  />
                )
              })}
            </CheckBoxContainer>
          </div>

          <TitleText fontSize="title-s">
            Empresa<span>.</span>
          </TitleText>
          <div>
            <CheckBoxContainer>
              {companies.map((company, index) => {
                return (
                  <CheckBox
                    key={index}
                    id={company._id}
                    value={company.name}
                    type="company"
                    handleCheck={handleCheck}
                  />
                )
              })}
            </CheckBoxContainer>
          </div>

          <ButtonArea className="button-area">
            <button
              className="apply-filter"
              type="submit"
              onClick={handleFilter}
            >
              <RegularText fontSize="text-s">Aplicar Filtros</RegularText>
            </button>
            <button className="reset-filter" onClick={handleDefaultChecked}>
              <RegularText fontSize="text-s">Resetar Filtros</RegularText>
            </button>
          </ButtonArea>
        </form>
      </FilterArea>
    </TestContainer>
  )
}
