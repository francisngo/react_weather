var React = require('react');
var { Link } = require('react-router');

var Example = (prop) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>here are a few example locations to try out:</p>
      <ol>
        <li><Link to='/?location=San+Francisco'>San Francisco, CA</Link></li>
        <li><Link to='/?location=New+York'>New York, NY</Link></li>
      </ol>
    </div>
  );
};

module.exports = Example;
