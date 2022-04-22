
export default class PaginationClass{
  constructor(totalData=[],stateObj, setStateObj){
    this.totalData = totalData
    this.stateObj = stateObj;
    this.setStateObj =  setStateObj;
  }

  switchViewMore(){
    this.setStateObj({
      ...this.stateObj,
      viewMore:{
        ...this.stateObj.viewMore,
        canViewMore: !this.stateObj.viewMore.canViewMore
      }
    })
  }
 
 
  paginateData(totalDataLength=0){
    this.stateObj.begin = ((this.stateObj.currentPage - 1) * this.stateObj.numberPerPage)
    this.stateObj.end = this.stateObj.begin + this.stateObj.numberPerPage
    // this.stateObj.paginatedData = this.totalData.slice(this.stateObj.begin,this.stateObj.end)
    this.setStateObj({
      ...this.stateObj,
      numberOfPages: Math.ceil(totalDataLength / this.stateObj.numberPerPage),
      paginatedData: this.totalData
      // paginatedData: this.totalData.slice(this.stateObj.begin,this.stateObj.end),
    })
  }

  nextPage(){
    if(this.stateObj.currentPage < this.stateObj.numberOfPages){
      this.stateObj.currentPage += 1;
      this.paginateData();
    }
  }

  prevPage(){
    if(this.stateObj.currentPage >  1){
      this.stateObj.currentPage -= 1;
      this.paginateData();
    }
  }

  firstPage(){
    if(this.stateObj.currentPage === 1) return null
    this.stateObj.currentPage = 1;
    this.paginateData();
  }

  lastPage(){
    if(this.stateObj.numberOfPages === this.stateObj.currentPage) return null
    this.stateObj.currentPage = this.stateObj.numberOfPages;
    this.paginateData();
  }

}
