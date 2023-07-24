import { faSimCard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SimCard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SimCard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSimCard} {...props} />;
};

export default SimCard;
