import { faFish } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Fish icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Fish = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFish} {...props} />;
};

export default Fish;
