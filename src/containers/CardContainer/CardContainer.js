import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card'

export const CardContainer = ({ results, info }) => {
  const cards = results.map(result => {
    return <Card result={result} />
  })

  return (
    <main>
      <div className="top-card-container">
        <div className="top-card">
        <button><i className="far fa-star"></i></button>
          <h1>{info.Name}</h1>
          <p>{info.wTeaser}</p>
        </div>
      </div>
      <div className="card-container">
        {cards}
      </div>
    </main>
  )
}

export const mapStateToProps = state => ({
  results: state.results,
  info: state.info
});

export const mapDispatchToProps = dispatch => ({
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);