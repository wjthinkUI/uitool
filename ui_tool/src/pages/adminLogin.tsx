// import { InputLogin } from '../atom/Input/InputLogin';
// import { ButtonLogin } from '../atom/Button/ButtonLogin';
import { InputLogin } from '@atom/Input/InputLogin';
import { ButtonLogin } from '@atom/Button/ButtonLogin';
import { ReactComponent as Wjlogo } from '@assets/Wjlogo.svg';
import { NavLinkCustom } from '@atom/Nav/NavLinkCustom';
export const AdminLogin = () => {
  return (
    <div className="w-[394px] m-auto mt-20">
      <div className="group">
        <NavLinkCustom title="교육 서비스" to="/" key="1234" end />
        <NavLinkCustom title="웅진씽크빅" to="/test" key="1244" end />
      </div>
      <div className="flex justify-center">
        <Wjlogo className="w-[163px] h-[88px]" />
      </div>
      <InputLogin type="Email" />
      <InputLogin type="Password" />
      <div className="flex justify-between mt-5 mb-14">
        <a href="#" className="text-body5r text-grayscale-600">
          계정 만들기
        </a>
        <a href="#" className="text-body5r text-grayscale-600">
          비밀번호를 잊어버리셨나요?
        </a>
      </div>
      <ButtonLogin />
    </div>
  );
};
