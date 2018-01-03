import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import FormBranch from './FormBranch'

const withForm = (Component) => class extends React.Component {
  constructor(props, defaultProps) {
    super(props, defaultProps);

    this.state = {
      data: {},
      loading: false,
    }

    this.timer = undefined

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateFieldData = this.updateFieldData.bind(this)
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleSubmit() {
    const {
      data,
      loading
    } = this.state

    if (!loading) {
      this.setState(
        {
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
            })
          }, 1000)
        },
      )
    }

    this.props.onSubmit(data)
  }

  updateFieldData(fieldId, value) {
    const data = Object.assign({}, this.state.data)

    data[fieldId] = value

    this.props.onDataChanged(data)

    this.setState({
      data,
    })
  }

  render() {
    return (
      <Component
        handleSubmit={this.handleSubmit}
        updateFieldData={this.updateFieldData}
        {...this.props}
        {...this.state}
      />
    )
  }
}

const Form = withForm(FormBranch)

Form.propTypes = {
  form: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.object.isRequired,
  onDataChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string,
  fixedSubmit: PropTypes.bool,
}

Form.PropTypes = {
  onDataChanged: () => {}
}

export default withRouter(Form)
