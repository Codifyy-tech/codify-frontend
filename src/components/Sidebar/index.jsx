import { ButtonLink } from '../ButtonLink'
import { RegularText, TitleText } from '../Typograph'
import { SignInDescSide } from './styless'

export function Sidebar({ title, desc, buttonText, imageUrl, path }) {
  return (
    <SignInDescSide>
      <aside>
        <div>
          <TitleText fontSize="title-l" color="base-white">
            {title}
          </TitleText>
          <RegularText fontSize="text-m" color="base-white" weight="500">
            {desc}
          </RegularText>
          <ButtonLink
            path={path}
            backgroundColor="base-white"
            textColor="base-black"
          >
            <RegularText fontSize="text-m" color="base-black" weight="500">
              {buttonText}
            </RegularText>
          </ButtonLink>
        </div>

        <div>
          <img src={imageUrl} alt="" />
        </div>
      </aside>
    </SignInDescSide>
  )
}
