import { faEur } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Eur icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Eur = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEur} {...props} />;
};

export default Eur;
