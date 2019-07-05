import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

class PickerIcon extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Form>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your Category"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.props.selected}
                    onValueChange={this.props.onValueChange}
                >
                    {this.props.pickerItems.map((item) => (
                        <Picker.Item key={item.id} label={item.label} value={item.value} />
                    ))}

                </Picker>
            </Form>
        );
    }
}

export { PickerIcon };