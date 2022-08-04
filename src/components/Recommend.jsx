import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Loading from "./Loading";

import MovieCard from "./MovieCard";

const Recommend = ({ id }) => {
  const dispatch = useDispatch();
  const { recommend, loading } = useSelector((state) => state.recommend);

  console.log("recommend", recommend);
  useEffect(() => {
    dispatch(movieAction.getMovieRecommend(id));
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <Container>
      <Title>추천 영화({recommend.results.length})</Title>

      <Card>
        {recommend.results &&
          recommend.results.map((recommend) => (
            <MovieCard key={recommend.id} recommend={recommend} />
          ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Title = styled.h1`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  color: red;
  font-size: 24px;
  margin-top: 15%;
  margin-left: 45%;
  width: 140px;
  height: 40px;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px 100px;
  justify-content: space-between;
`;

export default Recommend;