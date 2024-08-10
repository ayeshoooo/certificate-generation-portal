import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error:null, errorInfo:null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true ,error};
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErrorBoundary caught an error', error, errorInfo);
    this.setState({ errorInfo})
  }

  render() {
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
            <h1>Something went wrong.</h1>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children; 
  }
}

export default ErrorBoundary;
