import React, { Component } from "react";
import { fetchData } from "../services/fetchingData";
import Pagination from "./pagination";
import CardRender from "./cardRender";
import ChangeViewButton from "./changeViewButton";
class People extends Component {
  state = {
    data: [],
    searchType: "popularPerson",
    currentPage: 1,
    isRenderGallery: true,
    totalPages: 1
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
  handlePageClick = page => {
    const { searchType } = this.state;
    const options = {
      type: searchType,
      page: page
    };
    fetchData(options).then(fetchingData =>
      this.setState({
        data: fetchingData.results,
        currentPage: page
      })
    );
  };
  handleChangeView = () => {
    this.setState({ isRenderGallery: !this.state.isRenderGallery });
  };

  render() {
    const { data, isRenderGallery } = this.state;
    console.log("people_data", data);
    return (
      <div className="container">
        <div className="d-flex justify-content-around">
          <h2>
            Tatal pages of People = {this.state.totalPages}, current page -{" "}
            {this.state.currentPage}
          </h2>
          <div>
            <ChangeViewButton
              btnClick={this.handleChangeView}
              isRenderGallery={isRenderGallery}
            />
          </div>
        </div>

        <CardRender
          data={data}
          cardType="people"
          title="name"
          posterPath="profile_path"
          isRenderGallery={isRenderGallery}
        />
        <Pagination
          totalPages={this.state.totalPages}
          currentPage={this.state.currentPage}
          onClick={this.handlePageClick}
        />
      </div>
    );
  }
}

export default People;
