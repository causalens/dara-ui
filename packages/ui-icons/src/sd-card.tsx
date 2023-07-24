import { faSdCard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SdCard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SdCard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSdCard} {...props} />;
};

export default SdCard;
