import React from 'react';
import { connect } from 'react-redux';

export const CardContainer = ({ results, info }) => {
  const cards = results.map( result => {
    return <p>{result.Name}</p>
  })

  return (
    <main>
      <div className="top-card-container">
        <div className="top-card">
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