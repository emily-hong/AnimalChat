import styled from "styled-components"

const Outer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 1rem;
`

const PictureAndText = styled.div`
  display: flex;
`

const PictureSpace = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;
  align-items: center;
`

// TODO axios 요청 이후 - img태그로 바꾸고 배경색, border 빼기
const RoundPicture = styled.div`
  box-sizing: content-box;
  border: 1px solid black;
  border-radius: 50%;
  background-color: grey;
  width: 120px;
  height: 120px;
  margin: 1rem;
`

const TextSpace = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  & > h4 {
    margin: 0;
    padding: 0;
  }

  & > p {
    margin: 0;
    padding: 0;
  }
`

const ButtonSpace = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.button`
  margin: 1rem;
`

export default function AddAnimalInfo() {
  return (
    <div className="singleAnimalInfo">
      <Outer>
        <PictureAndText>
          <PictureSpace>
            <RoundPicture>
              {/* TODO : 사진 props, 악시오스 요청 */}
              사진
            </RoundPicture>
          </PictureSpace>
          <TextSpace>
            {/* TODO : 이름과 출생년도 props, 악시오스 요청 */}
            <div>
              <h4>반려동물 종류</h4>
              <input type="text" placeholder="종류" />
            </div>
            <div>
              <h4>반려동물 이름</h4>
              <input type="text" placeholder="햄찌" />
            </div>
            <div>
              <h4>출생년도</h4>
              <input type="text" placeholder="" />
            </div>
          </TextSpace>
        </PictureAndText>
        <ButtonSpace>
          {/* TODO : 악시오스 요청일까요? */}
          <Button>추가</Button>
        </ButtonSpace>
      </Outer>
    </div>
  )
}

// TODO
// props 목록 { profileSrc, animalName, animalBirth, }
