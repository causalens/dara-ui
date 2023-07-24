import { faContactCard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ContactCard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ContactCard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faContactCard} {...props} />;
};

export default ContactCard;
