import { faBacteria } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bacteria icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bacteria = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBacteria} {...props} />;
};

export default Bacteria;
