import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Trophy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Trophy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrophy} {...props} />;
};

export default Trophy;
