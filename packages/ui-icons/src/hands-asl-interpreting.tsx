import { faHandsAslInterpreting } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsAslInterpreting icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsAslInterpreting = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsAslInterpreting} {...props} />;
};

export default HandsAslInterpreting;
