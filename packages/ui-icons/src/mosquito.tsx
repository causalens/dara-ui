import { faMosquito } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mosquito icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mosquito = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMosquito} {...props} />;
};

export default Mosquito;
