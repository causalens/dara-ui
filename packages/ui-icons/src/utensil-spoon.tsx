import { faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UtensilSpoon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UtensilSpoon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUtensilSpoon} {...props} />;
};

export default UtensilSpoon;
