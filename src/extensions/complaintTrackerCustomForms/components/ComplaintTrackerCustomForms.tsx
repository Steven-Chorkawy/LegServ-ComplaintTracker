import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';


export interface IComplaintTrackerCustomFormsProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

const LOG_SOURCE: string = 'ComplaintTrackerCustomForms';

export default class ComplaintTrackerCustomForms extends React.Component<IComplaintTrackerCustomFormsProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: ComplaintTrackerCustomForms mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: ComplaintTrackerCustomForms unmounted');
  }

  public render(): React.ReactElement<{}> {
    return <div />;
  }
}
