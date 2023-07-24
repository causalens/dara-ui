import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AssistiveListeningSystems icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AssistiveListeningSystems = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAssistiveListeningSystems} {...props} />;
};

export default AssistiveListeningSystems;
