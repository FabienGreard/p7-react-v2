import styled from "styled-components";

export const Section = styled.section`
  margin: auto;
  width: 90%;
  max-width: 1024px;

  margin: 20px auto;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Post = styled.div`
  overflow: hidden;
  margin: 20px auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  min-height: 200px;
`;

export const PostHeader = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: #4b59f7;
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

export const PostContent = styled.p`
  font-size: 16px;
  text-align: center;
  background-color: white;
  padding: 20px;
`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #fff;
`;

export const PostCredentials = styled.p`
  font-size: 16px;
  text-align: center;
  background-color: white;
  padding: 20px;
`;

export const PostIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #fff;
  font-size: 30px;

  svg {
    margin: 5px 50px;
    cursor: pointer;
  }
`;
