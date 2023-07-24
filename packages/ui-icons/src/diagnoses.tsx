import { faDiagnoses } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Diagnoses icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Diagnoses = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDiagnoses} {...props} />;
};

export default Diagnoses;
