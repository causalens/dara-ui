import { faScissors } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Scissors icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Scissors = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScissors} {...props} />;
};

export default Scissors;
