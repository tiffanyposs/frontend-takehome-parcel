import React from 'react';
import SearchGems from './SearchGems';
import FontAwesome from 'react-fontawesome';

const Hero = () => {
  return (
    <div className="Hero text-center">
      <FontAwesome name="diamond" />
      <h1>Find Your Favorite Ruby Gems.</h1>
      <SearchGems />
    </div>
  )
}

export default Hero;
