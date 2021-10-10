import styled from 'styled-components'

// const StyledInput

export default function PasswordChange() {
  return (
    <div className="passwordChangeComponent" style={{border: '1px solid red'}}>
      <div>
        <span>현재 비밀번호</span>
        <input
          type='password'
          name='oldPassword'
        />
      </div>
      <div>
        <span>새 비밀번호</span>
        <input
          type='password'
          name='newPassword'
        />
      </div>
      <div>
        <button>확인</button>
      </div>
    </div>
  );
}