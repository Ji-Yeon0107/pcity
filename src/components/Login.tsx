import React from "react";
import styled from "styled-components";

const Login:React.FC = () => {

    return(
        <div>
            <div>
                <h1>로그인</h1>
                <p>파라디아스 시티에 오신 것을 환영합니다.</p>
                <p>로그인을 하시고 더 편리하게 이용하세요.</p>
            </div>
            <div>
                <div>
                    <div>로그인</div>
                    <input type="text" placeholder="이메일" />
                    <input type="text" placeholder="비밀번호"  />
                    <button>로그인</button>
                </div>
                <div>
                    <p>아직 회원이 아니신가요?</p>
                    <p>회원이 되시면 멤버십 혜택을 받으실 수 있습니다!</p>
                </div>
            </div>
        </div>
    )
}
