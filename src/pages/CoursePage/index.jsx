import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { RegularText } from '../../components/Typograph'
import { SignInValidatorSchema } from '../../utils/schema/loginSchema'
import { CategoryInput } from './components/CategoryInput'
import {
  CourseContainer,
  CourseCategory,
  CourseArea,
  CourseList,
} from './styles'
import React, { useEffect, useState } from 'react'
import { CourseCard } from './components/CardCourse'
import { api } from '../../services/api'
import { ReactComponent as Web } from '../../assets/frontend-icon.svg'
import { ReactComponent as Mobile } from '../../assets/mobile-icon.svg'
import { ReactComponent as Database } from '../../assets/database-icon.svg'

export const courseCategories = {
  frontend: {
    label: 'Front-end',
    icon: <Web />,
  },
  backend: {
    label: 'Back-end',
    icon: <Web />,
  },
  mobile: {
    label: 'Mobile',
    icon: <Mobile />,
  },
  database: {
    label: 'Database',
    icon: <Database />,
  },
}

export function CoursePage() {
  const token = localStorage.getItem('@Auth:token')
  const { register } = useForm({
    resolver: yupResolver(SignInValidatorSchema),
  })
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await api.get('/list/course', {
        params: { category: 'frontend' },
        headers: { Authorization: 'Bearer ' + token },
      })

      setCourses(data.data)
    }

    getCourses()
  }, [token])

  async function handleFilter(categorySelected) {
    const { data } = await api.get('/list/course', {
      params: { category: categorySelected.target.value },
      headers: { Authorization: 'Bearer ' + token },
    })

    setCourses(data.data)
  }

  return (
    <CourseContainer>
      <CourseCategory>
        <RegularText fontSize="text-s" weight="500">
          Categorias
        </RegularText>
        <form>
          {Object.entries(courseCategories).map(
            ([key, { label, icon, checked }]) => (
              <CategoryInput
                key={label}
                id={key}
                icon={icon}
                label={label}
                value={key}
                checked={checked}
                handleFilter={handleFilter}
                {...register('category')}
              />
            ),
          )}
        </form>
      </CourseCategory>

      <CourseArea>
        <RegularText fontSize="text-s" weight="500">
          Cursos Disponíveis
        </RegularText>
        <CourseList>
          {courses.map((course, index) => {
            return <CourseCard key={index} course={course} />
          })}
        </CourseList>
      </CourseArea>
    </CourseContainer>
  )
}
