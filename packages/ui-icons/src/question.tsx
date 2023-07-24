import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Question icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Question = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuestion} {...props} />;
};

export default Question;
