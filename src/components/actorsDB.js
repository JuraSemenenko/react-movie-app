import React, { Component } from "react";
import { fetchData } from "../services/fetchingData";
import ContentCard from "./contentCard";
class People extends Component {
  state = {
    data: [],
    searchType: "popularPerson",
    currentPage: 1
  };

  componentDidMount() {
    const options = {
      page: "1",
      type: this.state.searchType
    };
    fetchData(options).then(fetchingData =>
      this.setState({
        data: fetchingData.results,
        totalPages: fetchingData.total_pages
      })
    );
  }

  render() {
    const { data } = this.state;
    return (
      <div className="d-flex flex-wrap">
        {data.map(item => (
          <ContentCard
            key={item.id}
            id={item.id}
            title={item.name}
            posterPath={item.profile_path}
            cardType="people"
          />
        ))}
      </div>
    );
  }
}

export default People;
