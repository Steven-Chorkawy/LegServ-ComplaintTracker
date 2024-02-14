import * as React from "react";
import { IComplaintTrackerCustomFormsProps } from "./ComplaintTrackerCustomForms";
import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { Form, FormRenderProps } from "@progress/kendo-react-form";

export default class NewForm extends React.Component<IComplaintTrackerCustomFormsProps, any> {
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<{}> {
        return (
            <div>
                hello from new form.
                <Form
                    onSubmit={(value: any) => {
                        console.log('on form submit');
                        console.log(value);
                    }}
                    render={(formRenderProps: FormRenderProps) => (
                        <div className="k-form-buttons">
                            <PrimaryButton
                                type={"submit"}
                                disabled={!formRenderProps.allowSubmit}
                            >
                                Send Reservation Request
                            </PrimaryButton>
                            <DefaultButton onClick={formRenderProps.onFormReset}>Clear</DefaultButton>
                        </div>
                    )}
                />
            </div>
        );
    }
}
