import * as React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import {FormControl} from "react-bootstrap";
import {DatePickerInput} from "rc-datepicker";
import 'rc-datepicker/lib/style.css';
import StatusDropBox from "../common/StatusDropBox";

class ProjectInputGroup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        return (
            <div className={'inputGroup'}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Id</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name={'id'}
                        onChange={this.handleChange}
                        disabled={true}
                        value={this.props.project.id}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Create Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        disabled={true}
                        value={this.props.project.createDate}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name={'name'}
                        onChange={this.handleChange}
                        value={this.props.project.name}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name={'description'}
                        onChange={this.handleChange}
                        value={this.props.project.description}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Start Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <DatePickerInput
                        name={'startDate'}
                        onChange={this.handleChange}
                        value={this.props.project.startDate}
                        className='my-custom-datepicker-component'
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">End Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <DatePickerInput
                        name={'endDate'}
                        onChange={this.handleChange}
                        value={this.props.project.endDate}
                        className='my-custom-datepicker-component'
                    />
                </InputGroup>
                <StatusDropBox status={this.props.project.status}/>
            </div>
        )
    }
}

export default ProjectInputGroup;