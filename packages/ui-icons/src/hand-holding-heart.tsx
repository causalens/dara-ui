import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHoldingHeart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHoldingHeart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHoldingHeart} {...props} />;
};

export default HandHoldingHeart;
