import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * QuestionCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const QuestionCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuestionCircle} {...props} />;
};

export default QuestionCircle;
