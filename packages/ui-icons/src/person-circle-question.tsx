import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonCircleQuestion icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonCircleQuestion = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonCircleQuestion} {...props} />;
};

export default PersonCircleQuestion;
