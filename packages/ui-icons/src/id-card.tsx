import { faIdCard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * IdCard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const IdCard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIdCard} {...props} />;
};

export default IdCard;
