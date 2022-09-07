import { PulseLoader } from 'react-spinners'
import { ButtonForm } from '../ButtonForm'
import { InputForm } from '../Input'
import { SelectInput } from '../SelectInput'
import {
  AddressFormContainer,
  CepContainer,
  DistrictInfo,
  ErrorMessage,
  FormContainer,
  InputContainer,
  SearchButton,
} from './styles'

export function FormRegister({
  handleSubmit,
  formData,
  register,
  errors,
  handleSearch,
  isLoading,
}) {
  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <InputContainer>
        {formData.map((item, index) => {
          if (item.inputType === 'select') {
            return (
              <SelectInput
                error={errors[item.name]}
                key={index}
                labelText={item.labelText}
                placeholder={item.placeholder2}
                options={item.options}
                {...register(item.name)}
              />
            )
          } else {
            return (
              <InputForm
                key={index}
                error={errors[item.name]}
                labelText={item.labelText}
                placeholder={item.placeholder}
                typeInput={item.inputType}
                {...register(item.name)}
              />
            )
          }
        })}
      </InputContainer>

      <AddressFormContainer>
        <CepContainer>
          <InputForm
            error={!!errors.cep}
            labelText="CEP"
            placeholder="Digite seu CEP"
            typeInput="number"
            {...register('cep')}
          />
          <SearchButton
            onClick={handleSearch}
            type="button"
            isInvalid={!!errors.cep}
          >
            Pesquisar
          </SearchButton>
        </CepContainer>

        {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        <InputForm
          error={errors.address}
          labelText="Endereço"
          typeInput="text"
          disabled
          {...register('address')}
        />

        <InputForm
          error={errors.district}
          labelText="Bairro"
          typeInput="text"
          disabled
          {...register('district')}
        />

        <DistrictInfo>
          <InputForm
            error={errors.city}
            labelText="Cidade"
            typeInput="text"
            disabled
            {...register('city')}
          />
          <InputForm
            error={errors.state}
            labelText="Estado"
            typeInput="text"
            disabled
            {...register('state')}
          />
        </DistrictInfo>
      </AddressFormContainer>

      <ButtonForm
        backgroundColor="brand-blue"
        textColor="base-white"
        hoverBackgroundColor="base-button-hover"
      >
        {isLoading ? <PulseLoader color="#FFF" size={14} /> : 'Cadastrar'}
      </ButtonForm>
    </FormContainer>
  )
}
