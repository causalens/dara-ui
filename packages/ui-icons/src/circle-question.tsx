import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleQuestion icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleQuestion = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleQuestion} {...props} />;
};

export default CircleQuestion;
