import { BrandsSectionContainer } from './styles'

import brandFiap from '../../../../assets/brand-fiap.svg'
import brandIbm from '../../../../assets/brand-ibm.svg'
import brandTopa from '../../../../assets/brand-topa.svg'

export function BrandSection() {
  return (
    <BrandsSectionContainer className="container">
      <img src={brandFiap} alt="" />
      <img src={brandIbm} alt="" />
      <img src={brandTopa} alt="" />
    </BrandsSectionContainer>
  )
}