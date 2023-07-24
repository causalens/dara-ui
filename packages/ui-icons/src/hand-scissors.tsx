import { faHandScissors } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandScissors icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandScissors = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandScissors} {...props} />;
};

export default HandScissors;
